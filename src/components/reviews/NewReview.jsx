import React from 'react'
import useReviewSubmit from '../../hooks/useReviewSubmit'
import InputArea from '../../inputs/InputArea'
import TextArea from '../../inputs/TextArea'
import Form from '../../inputs/forms/Form'
import SubForm from '../../inputs/forms/SubForm'
import Stars from '../../inputs/Stars'
const NewReview = () => {
  const { handleSubmit, errors, onSubmit, register, reset, control } = useReviewSubmit()

  return (
    <Form onSubmit={onSubmit} buttonText="שליחה" buttonClass="btn btn-primary w-100" handleSubmit={handleSubmit} subForms={[
      {
        title: "הוסף דירוג",
        gridCols: 1,
        children: [
          {
            component: InputArea,
            props: { label: "שם", name: "userName", register: register, errors: errors, rules: { required: true } },
          },
          {
            component: TextArea,
            props: { label: "הערה", name: "content", register: register, errors: errors, rules: { required: true } },
          },
          {
            component: Stars,
            props: { label: "דירוג", name: "rating", control: control, errors: errors, rules: { required: true } },
          },
        ],
      },
    ]}
      renderSubForms={(subForm, index) => (
        <SubForm key={index} title={subForm.title} children={subForm.children} gridCols={subForm.gridCols} />
      )}
    />
  )
}

export default NewReview