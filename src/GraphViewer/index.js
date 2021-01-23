import pursuit from 'pursuit'

import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import SigmaSettings from './SigmaSettings'

import {
  Sigma,
  Filter,
  LoadGEXF,
  DragNodes,
  EdgeShapes,
  NodeShapes,
  RelativeSize,
  SigmaEnableWebGL,
} from 'react-sigma'

import Measure from 'react-measure'

import FilterControls from './FilterControls'

import ForceLink from 'react-sigma/lib/ForceLink'
import ForceLinkControls from './ForceLinkControls'

import Dagre from 'react-sigma/lib/Dagre'
import DagreControls from './DagreControls'

import './index.scss'

const ORDERING_MAP = {
  Dagre: {
    ForceControls: DagreControls,
    ForceComponent: Dagre
  },
  ForceLink: {
    ForceControls: ForceLinkControls,
    ForceComponent: ForceLink
  },
}

export default ({ gexfUrl }) => {
  const sigmaRef = useRef()

  const [ graphCardDimensions, setGraphCardDimensions ] = useState({ width: 0, height: 0 })

  const [ nodesQuery, setNodesQuery ] = useState({})
  const [ selectedNode, setSelectedNode ] = useState(undefined)

  const [ forceConfig, setForceConfig ] = useState({})
  const [ selectedAlgorithm, setSelectedAlgorithm ] = useState(undefined)

  const [ defaultNodeColor, setDefaultNodeColor] = useState('#000')
  const [ defaultEdgeColor, setDefaultEdgeColor] = useState('#f00')
  const [ defaultLabelColor, setDefaultLabelColor ] = useState('#fff')

  const [ drawNodes, setDrawNodes ] = useState(true)
  const [ drawEdges, setDrawEdges ] = useState(true)
  const [ drawLabels, setDrawLabels ] = useState(false)

  // useEffect(() => {
  //   console.log(sigmaRef.current.sigma)
  // }, [ sigmaRef ])

  const {
    ForceControls,
    ForceComponent
  } = useMemo(() => {
    if (!selectedAlgorithm) return {}
    if (!ORDERING_MAP[selectedAlgorithm]) return {}
    return ORDERING_MAP[selectedAlgorithm]
  }, [ selectedAlgorithm ])

  const settings = useMemo(() => ({
    nodeColor: 'default',
    edgeColor: 'default',
    labelSize: 'fixed',
    labelThreshold: 5,
    defaultLabelSize: 15,
    batchEdgesDrawing: true,
    drawNodes,
    drawEdges,
    drawLabels,
    defaultNodeColor,
    defaultEdgeColor,
    defaultLabelColor,
  }), [
    drawNodes,
    drawEdges,
    drawLabels,
    defaultNodeColor,
    defaultEdgeColor,
    defaultLabelColor,
  ])

  const onMouseoverNode = useCallback(({ data }) => {
    setSelectedNode(data.node.id)
  }, [ setSelectedNode ])

  const onMouseoutNode = useCallback(() => {
    setSelectedNode(undefined)
  }, [ setSelectedNode ])

  const onChangeDrawNodes = useCallback(({ target }) => {
    setDrawNodes(target.checked)
  }, [ setDrawNodes ])

  const onChangeDrawEdges = useCallback(({ target }) => {
    setDrawEdges(target.checked)
  }, [ setDrawEdges ])

  const onChangeDrawLabels = useCallback(({ target }) => {
    setDrawLabels(target.checked)
  }, [ setDrawLabels ])

  const onSelectAlgorithm = useCallback(({ target }) => {
    setSelectedAlgorithm(target.value)
  }, [ setSelectedAlgorithm ])

  const onSubmitForceConfig = useCallback(forceConfig => {
    setForceConfig(forceConfig)
  }, [ setForceConfig ])

  const onSubmitFilter = useCallback(nodesQuery => {
    setNodesQuery(nodesQuery)
  }, [ setNodesQuery ])

  const onResizeSigmaCard = useCallback(contentRect => {
    setGraphCardDimensions(contentRect.bounds)
  }, [ setGraphCardDimensions ])

  return (
    <Container fluid className="graph-viewer p-3">
      <Row>
        <Col xs={3}>
          <ListGroup>
            <ListGroup.Item className="d-flex align-items-center">
              <Form.Group className="m-0">
                <Form.Label>
                  <Form.Check inline
                    type="switch"
                    checked={drawNodes}
                    onChange={onChangeDrawNodes}
                  />
                  <span>Draw Nodes</span>
                </Form.Label>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex ">
              <Form.Group className="m-0">
                <Form.Label>
                  <Form.Check inline
                    type="switch"
                    checked={drawEdges}
                    onChange={onChangeDrawEdges}
                  />
                  <span>Draw Edges</span>
                </Form.Label>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex ">
              <Form.Group className="m-0">
                <Form.Label>
                  <Form.Check inline
                    type="switch"
                    checked={drawLabels}
                    onChange={onChangeDrawLabels}
                  />
                  <span>Draw Labels</span>
                </Form.Label>
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item>
              <FilterControls onSubmit={onSubmitFilter} />
            </ListGroup.Item>

            <ListGroup.Item>
              <Form>
                <Form.Group className="m-0">
                  <Form.Label>Sorting</Form.Label>
                  <Form.Control as="select" onChange={onSelectAlgorithm}>
                    <option>Select an Algorithm</option>
                    {Object.keys(ORDERING_MAP).map(algorithm => (
                      <option key={`algorithm-${algorithm}`} value={algorithm}>
                        {algorithm}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </ListGroup.Item>

            {ForceControls ? (
              <ListGroup.Item>
                <ForceControls onSubmit={onSubmitForceConfig} />
              </ListGroup.Item>
            ) : null}
          </ListGroup>
        </Col>

        <Col xs={9}>
          <Card className="sigma-card">
            <Card.Body className="p-0">
              <Measure bounds onResize={onResizeSigmaCard}>
                {({ measureRef }) => (
                  <div ref={measureRef} className="sigma-wrapper">
                    <Sigma ref={sigmaRef}
                      renderer="canvas"
                      style={{ height: graphCardDimensions.height }}
                      onOverNode={onMouseoverNode}
                      onOutNode={onMouseoutNode}
                    >
                      <EdgeShapes default="curvedArrow" />
                      <SigmaSettings settings={settings} />

                      <LoadGEXF path={gexfUrl}>
                        { selectedNode ? (
                          <Filter neighborsOf={selectedNode} />
                        ) : (
                          <Filter nodesBy={pursuit(nodesQuery)} />
                        ) }

                        { ForceComponent ? (
                          <ForceComponent {...forceConfig}>
                            <DragNodes />
                          </ForceComponent>
                        ) : (
                          <DragNodes />
                        ) }

                        <RelativeSize initialSize={10} />
                      </LoadGEXF>
                    </Sigma>
                  </div>
                )}
              </Measure>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}
