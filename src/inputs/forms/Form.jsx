import React from 'react'

const Form = ({ subForms = [], renderSubForms, onSubmit, handleSubmit, buttonText, buttonClass = "btn btn-primary text-white col-lg-4 col-md-6 col-12" }) => {

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-2">
        {subForms.map((subForm, index) => (
          renderSubForms(subForm, index)
        ))}
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className={buttonClass}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>

  )
}

export default Form