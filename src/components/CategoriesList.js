import React from "react";
import { useSelector } from "react-redux";

export default function CategoriesList() {
  const categories = useSelector((state) => state.cat.categories);

  return (
    <div>
      <table className='table'>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <th>{categories.indexOf(category) + 1}</th>
                <td>{category.text}</td>
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
