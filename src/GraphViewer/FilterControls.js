import debounce from 'lodash/debounce'

import React from 'react'

import Form from 'react-bootstrap/Form'

import { Formik } from 'formik'

const initialValues = {
  size: {
    lessThan: 500,
    greaterThanOrEqualTo: 0,
  }
}

export default ({ onSubmit, ...otherProps }) => {
  return (
    <Formik initialValues={{...initialValues}} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => {
        return (
          <Form {...otherProps} onChange={debounce(handleSubmit, 666)}>
            <Form.Group>
              <Form.Label>Size Range</Form.Label>
              <Form.Control
                type="number"
                name="size.greaterThanOrEqualTo"
                value={values.size.greaterThanOrEqualTo}
                min="0"
                step="10"
                onChange={handleChange}
              />
              <Form.Control
                type="number"
                name="size.lessThan"
                value={values.size.lessThan}
                min="0"
                step="10"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        )
      }}
    </Formik>
  )
}
