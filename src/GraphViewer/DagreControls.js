import React from 'react'

import Form from 'react-bootstrap/Form'

import { Formik } from 'formik'

const initialValues = {
  directed: true,
  multigraph: false,
  compound: true,
  rankDir: 'TB', // ["TB", "BT", "RL", "LR"]
}

export default ({ onSubmit, ...otherProps }) => {
  return (
    <Formik initialValues={{...initialValues}} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => {
        return (
          <Form {...otherProps} onChange={handleSubmit}>
            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="directed"
                  checked={values.directed}
                  onChange={handleChange}
                />
                <span>directed</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="multigraph"
                  checked={values.multigraph}
                  onChange={handleChange}
                />
                <span>multigraph</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="compound"
                  checked={values.compound}
                  onChange={handleChange}
                />
                <span>compound</span>
              </Form.Label>
            </Form.Group>
          </Form>
        )
      }}
    </Formik>
  )
}
