import React from "react";

export default function CategoriesList() {
  const categories = ["kjsdjs", "other category", "third category"];
  return (
    <div>
      <table className='table'>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category}>
                <th>{categories.indexOf(category) + 1}</th>
                <td>{category}</td>
                <td>
                  <button className='btn btn-primary'>Edit</button>
                </td>
                <td>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
