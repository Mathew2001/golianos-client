import React, { useState } from 'react'
import { useContactUs } from '../hooks/useContactUs'
import Form from '../inputs/forms/Form'
import InputArea from '../inputs/InputArea'
import TextArea from '../inputs/TextArea'
import SubForm from '../inputs/forms/SubForm'

const ContactUs = ({ title = "צור קשר" }) => {
  const { onSubmit, errors, register, handleSubmit, reset } = useContactUs()

  return (
    <Form onSubmit={onSubmit} buttonText="שליחה" buttonClass="btn btn-primary text-white col-12 mt-3" handleSubmit={handleSubmit} subForms={[
      {
        title: title,
        gridCols: 2,
        children: [
          {
            component: InputArea,
            props: { label: "שם", name: "name", register: register, errors: errors, rules: { required: true } },
          },
          {
            component: InputArea,
            props: { label: "שם חברה", name: "companyName", register: register, errors: errors, rules: { required: true } },
          },
          {
            component: InputArea,
            props: { label: "טלפון", name: "phone", register: register, errors: errors, rules: { required: true, pattern: { value: /^[0-9]{9,10}$/, message: "טלפון חייב להכיל 9-10 ספרות" } } },
          },
          {
            component: InputArea,
            props: { label: "דואר אלקטרוני", name: "email", register: register, errors: errors, rules: { required: true, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "כתובת דואר אלקטרוני שגויה" } } },
          },
        ],
      },
      {
        title: "",
        gridCols: 1,
        children: [
          {
            component: TextArea,
            props: { label: "הודעה", name: "message", register: register, errors: errors, rules: { required: true } },
          },
        ],
      }
    ]} renderSubForms={(subForm, index) => {
      return <SubForm key={index} title={subForm.title} children={subForm.children} gridCols={subForm.gridCols} />
    }} />
  )
}

export default ContactUs