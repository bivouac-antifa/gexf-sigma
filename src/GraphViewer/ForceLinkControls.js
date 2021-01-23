import React from 'react'

import Form from 'react-bootstrap/Form'

import { Formik } from 'formik'

const initialValues = {
  linLogMode: true,
  adjustSizes: false,
  barnesHutTheta: 0.5,
  barnesHutOptimize: false,
  edgeWeightInfluence: 0,
  iterationsPerRender: 1,
  outboundAttractionDistribution: false,
  scalingRatio: 1,
  strongGravityMode: false,
  slowDown: 1,
  gravity: 1,
  alignNodeSiblings: false,
  nodeSiblingsScale: 1,
  nodeSiblingsAngleMin: 0,
  worker: true,
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
                  name="linLogMode"
                  checked={values.linLogMode}
                  onChange={handleChange}
                />
                <span>linLogMode</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="adjustSizes"
                  checked={values.adjustSizes}
                  onChange={handleChange}
                />
                <span>adjustSizes</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="barnesHutOptimize"
                  checked={values.barnesHutOptimize}
                  onChange={handleChange}
                />
                <span>barnesHutOptimize</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>barnesHutTheta</Form.Label>
              <Form.Control
                type="number"
                name="barnesHutTheta"
                value={values.barnesHutTheta}
                min="0"
                step="0.1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>edgeWeightInfluence</Form.Label>
              <Form.Control
                type="number"
                name="edgeWeightInfluence"
                value={values.edgeWeightInfluence}
                min="0"
                step="0.1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>iterationsPerRender</Form.Label>
              <Form.Control
                type="number"
                name="iterationsPerRender"
                value={values.iterationsPerRender}
                min="0"
                step="1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="outboundAttractionDistribution"
                  checked={values.outboundAttractionDistribution}
                  onChange={handleChange}
                />
                <span>outboundAttractionDistribution</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>scalingRatio</Form.Label>
              <Form.Control
                type="number"
                name="scalingRatio"
                value={values.scalingRatio}
                min="0"
                step="0.1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="strongGravityMode"
                  checked={values.strongGravityMode}
                  onChange={handleChange}
                />
                <span>strongGravityMode</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>slowDown</Form.Label>
              <Form.Control
                type="number"
                name="slowDown"
                value={values.slowDown}
                min="0"
                step="1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>gravity</Form.Label>
              <Form.Control
                type="number"
                name="gravity"
                value={values.gravity}
                min="0"
                step="0.1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="alignNodeSiblings"
                  checked={values.alignNodeSiblings}
                  onChange={handleChange}
                />
                <span>alignNodeSiblings</span>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>nodeSiblingsScale</Form.Label>
              <Form.Control
                type="number"
                name="nodeSiblingsScale"
                value={values.nodeSiblingsScale}
                min="0"
                step="0.1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>nodeSiblingsAngleMin</Form.Label>
              <Form.Control
                type="number"
                name="nodeSiblingsAngleMin"
                value={values.nodeSiblingsAngleMin}
                min="0"
                step="1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  inline
                  type="switch"
                  name="worker"
                  checked={values.worker}
                  onChange={handleChange}
                />
                <span>worker</span>
              </Form.Label>
            </Form.Group>
          </Form>
        )
      }}
    </Formik>
  )
}
