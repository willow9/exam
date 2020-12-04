import { connect } from "react-redux";
import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteCategory } from "./../store/actions/categoriesActions";

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (e) => {
    console.log(e.target.value);
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
                        <button className='btn btn-primary'>Edit</button>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={this.handleDelete} value={category.id}>
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
  // console.log(state.firestore.ordered);
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

// firestoreConnect([{ collection: "categories", where: ["title", "==", "Magic"] }])

// import { useSelector } from "react-redux";
// import { useFirestoreConnect } from "react-redux-firebase";

// export default function CategoriesList() {
//   useFirestoreConnect([
//     {
//       collection: "categories",
//     },
//   ]);
//   const categ = useSelector(({ firestore: { data } }) => data.categories);
//   const categories = useSelector((state) => state.firestore.ordered.categories);
//   console.log(categ);

//   return (
//     <div>
//       <table className='table'>
//         <tbody>
//           {categories.map((category) => {
//             return (
//               <tr key={category.id}>
//                 <th>{categories.indexOf(category) + 1}</th>
//                 <td>{category.text}</td>
//                 <td>
//                   <button className='btn btn-primary'>Edit</button>
//                 </td>
//                 <td>
//                   <button className='btn btn-danger'>Delete</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
