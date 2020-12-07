import React, { Component } from "react";

export default class ExamsList extends Component {
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>
              <ul className='list-group'>
                <li className='list-group-item disabled'>Cras justo odio</li>
                <li className='list-group-item'>
                  Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in Dapibus ac facilisis in
                  22222222222222222222222222222 Dapibus ac facilisis in
                </li>
                <li className='list-group-item'>Morbi leo risus</li>
                <li className='list-group-item'>Porta ac consectetur ac</li>
                <li className='list-group-item'>Vestibulum at eros</li>
              </ul>
            </td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
