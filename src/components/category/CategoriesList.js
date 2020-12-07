import { connect } from "react-redux";
import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteCategory } from "../../store/actions";

//TODO implement restriction: can't delete category if there is questions in it

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (e) => {
    this.props.deleteCategory(e.target.value);
  };
  render() {
    return (
      <div>
        <table className='table'>
          <tbody>
            {this.props.categories
              ? this.props.categories.map((category) => {
                  return (
                    <tr key={category.id}>
                      <th>{this.props.categories.indexOf(category) + 1}</th>
                      <td>{category.title}</td>
                      <td>
                        <button className='btn btn-outline-primary btn-sm edit-btn'>Edit</button>
                      </td>
                      <td>
                        <button className='btn btn-outline-danger' onClick={this.handleDelete} value={category.id}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.firestore.ordered.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCategory: (id) => dispatch(deleteCategory(id)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "categories" }])
)(CategoriesList);
