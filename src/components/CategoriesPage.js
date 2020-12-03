import React from "react";
import AddCategory from "./AddCategory";
import CategoriesList from "./CategoriesList";

export default function CategoriesPage() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <CategoriesList />
          </div>

          <div className='col-sm-8'>
            <AddCategory></AddCategory>
          </div>
        </div>
      </div>
    </div>
  );
}
