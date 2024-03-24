// Import React and necessary hooks/components
import React, { useCallback, useState, useRef, useReducer } from "react";
import initialEdges from "./InitialEdges/InitialEdges"; // Importing initial edges data
import initialNodes from "./InitialNodes/InitialNodes"; // Importing initial nodes data

import { HiPlusCircle, HiPencilSquare } from "react-icons/hi2"; // icons
import { HiDownload } from "react-icons/hi"; // icons
import ReactFlow, { Handle } from "react-flow-renderer"; // Importing ReactFlow components and hooks for managing flow

import html2canvas from "html2canvas"; // Importing HTML to canvas library for exporting flow as image
import { jsPDF } from "jspdf"; // Importing jsPDF library for creating PDFs

import "react-flow-renderer/dist/style.css"; // Importing default styles for ReactFlow
import HoverCard from "./ui/Hovercard/HoverCard"; // Importing HoverCard component for node hover information
import "./tree.css"; // Importing custom styles
import Popup from "./ui/Popup/Popup"; // Importing Popup component
//  initial state for the reducer
const initialState = {
  nodes: initialNodes,
  edges: initialEdges,
  hoveredNode: null,
  showBottomBar: true,
  showInputBox: false,
  showPopup: false,
  yPos: 0,
  label: "",
  selectedNodeId: null,
  popupData: "",
};

//  reducer function to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NODE":
      return {
        ...state,
        nodes: [
          ...state.nodes,
          {
            id: `Node-${state.nodes.length + 1}`,
            type: "default",
            position: { x: 100, y: state.yPos + 50 },
            data: { label: state.label },
            newlyCreated: true,
            draggable: true,
          },
        ],
        yPos: state.yPos + 50,
        label: "",
      };
    case "UPDATE_NODE":
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === state.selectedNodeId
            ? {
                ...node,
                data: { ...node.data, label: state.label },
                draggable: true,
              }
            : node
        ),
        label: "",
        selectedNodeId: null,
      };
    case "DELETE_NODE":
      return {
        ...state,
        nodes: state.nodes.filter((node) => node.id !== state.selectedNodeId),
        edges: state.edges.filter(
          (edge) =>
            edge.source !== state.selectedNodeId &&
            edge.target !== state.selectedNodeId
        ),
        selectedNodeId: null,
        label: "",
      };
    case "SET_LABEL":
      return { ...state, label: action.payload };
    case "ADD_EDGE":
      return {
        ...state,
        edges: [...state.edges, action.payload], // Add the new edge to the edges array
      };

    case "TOGGLE_BOTTOM_BAR":
      return { ...state, showBottomBar: action.payload };
    case "TOGGLE_INPUT_BOX":
      return { ...state, showInputBox: action.payload };
    case "TOGGLE_POPUP":
      return { ...state, showPopup: action.payload };
    case "SET_HOVERED_NODE":
      return { ...state, hoveredNode: action.payload };
    case "SET_SELECTED_NODE":
      return {
        ...state,
        selectedNodeId: action.payload.id,
        label: action.payload.label,
      };

    case "CANCEL":
      return {
        ...state,
        label: "",
        showInputBox: false,
        showBottomBar: true,
        selectedNodeId: null,
      };

    case "UPDATE_NODE_POSITION":
      const { id, position } = action.payload;
      const updatedNodes = state.nodes.map((node) =>
        node.id === id ? { ...node, position } : node
      );
      return { ...state, nodes: updatedNodes };

    case "UPDATE_POPUP_DATA":
      return { ...state, popupData: action.payload };
    default:
      return state;
  }
};
//  custom node types for ReactFlow
const nodeTypes = {
  default: ({ data, draggable }) => (
    <div
      style={{
        fontSize: "15px",
        fontWeight: "bold",
        height: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      draggable={draggable}
    >
      {data.label}
      {/* Handles for connecting edges */}
      <Handle
        type="source"
        position="right"
        style={{ background: "red", width: "6px", height: "6px" }}
      />
      <Handle
        type="target"
        position="left"
        style={{ background: "blue", width: "6px", height: "6px" }}
      />
    </div>
  ),
};
//  Mindnode component
const Mindnode = () => {
  // Initializing references, state variables, and reducers
  const inputRef = useRef(null); // Reference for input field
  const [state, dispatch] = useReducer(reducer, initialState); // Initializing state using reducer
  const [showHoverCard, setShowHoverCard] = useState(true);
  const [showButton, setShowButton] = useState(null);

  // Destructure state variables for easier access
  const {
    nodes,
    edges,
    hoveredNode,
    showBottomBar,
    showInputBox,
    showPopup,
    label,
    selectedNodeId,
  } = state;

  // Defining node hover handlers
  const handleNodeMouseEnter = (event, node) => {
    dispatch({ type: "SET_HOVERED_NODE", payload: node });
  };

  const handleNodeMouseLeave = () => {
    dispatch({ type: "SET_HOVERED_NODE", payload: null });
  };

  // Callback function to handle edge creation
  const onConnect = useCallback(
    (params) => {
      const newEdge = { ...params, type: "step" }; // Set the type to "step"
      dispatch({ type: "ADD_EDGE", payload: newEdge }); // Dispatch action to add the new edge
      setShowHoverCard(false); // Hide the hover card
    },
    [dispatch, setShowHoverCard] // Add setShowHoverCard to the dependencies array
  );

  // Handlers for input field changes and node management actions
  const handleLabelChange = (e) => {
    dispatch({ type: "SET_LABEL", payload: e.target.value }); // Dispatch action to set label
  };

  const addNode = () => {
    dispatch({ type: "ADD_NODE" }); // Dispatch action to delete node
    dispatch({ type: "TOGGLE_BOTTOM_BAR", payload: true });
    dispatch({ type: "TOGGLE_INPUT_BOX", payload: false });
    dispatch({
      type: "UPDATE_POPUP_DATA",
      payload: "Node Added Successfully",
    });

    dispatch({ type: "TOGGLE_POPUP", payload: true });
  };
  const handleEdit = () => {
    dispatch({ type: "UPDATE_NODE" }); // Dispatch action to delete node
    dispatch({ type: "TOGGLE_BOTTOM_BAR", payload: true });
    dispatch({ type: "TOGGLE_INPUT_BOX", payload: false });
    dispatch({
      type: "UPDATE_POPUP_DATA",
      payload: "Node Edited Successfully",
    });
    dispatch({ type: "TOGGLE_POPUP", payload: true });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_NODE" }); // Dispatch action to delete node
  };

  // Callback function to cancel node editing
  const handleCancel = () => {
    dispatch({ type: "CANCEL" }); // Dispatch action to cancel editing
  };

  // Function to download the flowchart as a PDF
  const handleDownloadPDF = () => {
    console.log("got it");
    const flowchartElement = document.querySelector(".react-flow"); // Get flowchart element
    const { scrollWidth, scrollHeight } = flowchartElement; // Get dimensions

    html2canvas(flowchartElement, {
      width: flowchartElement.scrollWidth,
      height: flowchartElement.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png"); // Convert canvas to image data
      const pdf = new jsPDF("landscape"); // Create new PDF document
      const pdfWidth = pdf.internal.pageSize.getWidth(); // Get PDF width
      const pdfHeight = pdf.internal.pageSize.getHeight(); // Get PDF height
      const ratio = Math.min(pdfWidth / scrollWidth, pdfHeight / scrollHeight); // Calculate scaling ratio
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        scrollWidth * ratio,
        scrollHeight * ratio
      ); // Add image to PDF
      pdf.save("mindtree.pdf"); // Save PDF
      dispatch({
        type: "UPDATE_POPUP_DATA",
        payload: "Downloaded Successfully",
      });
      dispatch({ type: "TOGGLE_POPUP", payload: true });
    });
  };

  // Event handlers for various user interactions
  const handlePlusCircleClick = () => {
    dispatch({ type: "TOGGLE_BOTTOM_BAR", payload: false });
    dispatch({ type: "TOGGLE_INPUT_BOX", payload: true });
    setShowButton("Add");
  };
  const handleEditDeleteClick = () => {
    dispatch({
      type: "UPDATE_POPUP_DATA",
      payload: "Double click on the node to Edit",
    });

    dispatch({ type: "TOGGLE_POPUP", payload: true });
  };

  // Function to handle closing the pop-up
  const handlePopupClose = () => {
    dispatch({ type: "TOGGLE_POPUP", payload: false });
  };
  // function for single click on node
  const handleNodeClick = (event, node) => {
    if (event.detail === 1) {
      if (window.innerWidth > 768) {
        if (node) {
          dispatch({
            type: "SET_SELECTED_NODE",
            payload: { id: node.id, label: node.data.label },
          });

          if (inputRef.current) {
          }
        } else {
          dispatch({
            type: "SET_SELECTED_NODE",
            payload: { id: null, label: "" },
          });
        }
      } else {
        setShowHoverCard(true);

        dispatch({ type: "TOGGLE_BOTTOM_BAR", payload: true });
        dispatch({ type: "TOGGLE_INPUT_BOX", payload: false });
      }
    }
  };
  // function for double click on node

  const handleNodeDoubleClick = (event, node) => {
    if (window.innerWidth < 769) {
      if (event.detail === 2) {
        setShowButton("Edit");
        console.log("2 clicks");
        setShowHoverCard(false);
        if (node) {
          dispatch({
            type: "SET_SELECTED_NODE",
            payload: { id: node.id, label: node.data.label },
          });
          dispatch({ type: "TOGGLE_BOTTOM_BAR", payload: false });
          dispatch({ type: "TOGGLE_INPUT_BOX", payload: true });

          if (inputRef.current) {
            inputRef.current.focus();
          }
        } else {
          dispatch({
            type: "SET_SELECTED_NODE",
            payload: { id: null, label: "" },
          });
        }
      }
    }
  };
  //  function to show popup if inputbox is empty
  const addClick = () => {
    if (!label.trim()) {
      dispatch({
        type: "UPDATE_POPUP_DATA",
        payload: "Please enter label ",
      });

      dispatch({ type: "TOGGLE_POPUP", payload: true });
    } else {
      dispatch({ type: "TOGGLE_BOTTOM_BAR", payload: true });
      dispatch({ type: "TOGGLE_INPUT_BOX", payload: false });
    }
  };
  // cancel button click
  const cancelClick = () => {
    dispatch({ type: "SET_LABEL", payload: "" });
    dispatch({ type: "TOGGLE_BOTTOM_BAR", payload: true });
    dispatch({ type: "TOGGLE_INPUT_BOX", payload: false });
  };

  const onNodeDrag = useCallback(
    (event, node) => {
      dispatch({
        type: "UPDATE_NODE_POSITION",
        payload: { id: node.id, position: node.position },
      });
    },
    [dispatch]
  );
  return (
    <div className="parent-container">
      {/* Render the flowchart */}
      <ReactFlow
        nodes={nodes} // Nodes data
        edges={edges} // Edges data
        onConnect={onConnect} // Handler for edge creation
        onNodeClick={handleNodeClick} // Handler for node click
        onNodeDoubleClick={handleNodeDoubleClick}
        nodeTypes={nodeTypes} // Custom node types
        onNodeMouseEnter={handleNodeMouseEnter} // Handler for mouse enter on node
        onNodeMouseLeave={handleNodeMouseLeave} // Handler for mouse leave from node
        onNodeDrag={onNodeDrag}
        className="custom-react-flow" // Custom styling
      />
      {/* Display hover card for node information */}
      {showHoverCard && (
        <HoverCard
          label={
            hoveredNode &&
            !hoveredNode.newlyCreated &&
            hoveredNode.id !== "Company"
              ? hoveredNode.data.label
              : ""
          }
          imageUrl={
            hoveredNode &&
            !hoveredNode.newlyCreated &&
            hoveredNode.id !== "Company"
              ? hoveredNode.data.imageUrl
              : ""
          }
          paragraph={
            hoveredNode &&
            !hoveredNode.newlyCreated &&
            hoveredNode.id !== "Company"
              ? hoveredNode.data.paragraph
              : ""
          }
          visible={
            hoveredNode &&
            !hoveredNode.newlyCreated &&
            hoveredNode.id !== "Company"
          }
        />
      )}
      {/* Input and buttons for node management */}
      <div className="buttonLine">
        <input
          ref={inputRef} // Reference for input field
          type="text"
          value={label} // Value of input field
          onChange={handleLabelChange} // Handler for input change
          placeholder="Enter label"
        />
        {/* Conditional rendering for Add/Edit Node button */}
        <button
          className={`${selectedNodeId ? "edit-node" : "add-node"}`}
          onClick={() => {
            if (label.trim() !== "") {
              if (selectedNodeId) {
                handleEdit();
              } else {
                addNode();
              }
            } else {
              addClick();
            }
          }}
        >
          {selectedNodeId ? "Edit Node" : "Add Node"}
        </button>
        {/* Conditional rendering for Delete and Cancel buttons */}
        {selectedNodeId && (
          <>
            <button className="delete-node" onClick={handleDelete}>
              Delete Node
            </button>

            <button className="cancel-node" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}
        {/* Button to download the flowchart as PDF */}
        <button className="download-pdf" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>

      {showBottomBar && (
        <div className="bottom-bar">
          {/* Add Node button */}
          <div onClick={handlePlusCircleClick} className="bottom-bar-icon">
            <HiPlusCircle />
            <span>Add Node</span>
          </div>
          {/* Edit Node button */}
          <div onClick={handleEditDeleteClick} className="bottom-bar-icon">
            <HiPencilSquare />
            <span>Edit Node</span>
          </div>

          {/* Download PDF button */}
          <div onClick={handleDownloadPDF} className="bottom-bar-icon">
            <HiDownload />
            <span>Screenshot</span>
          </div>
        </div>
      )}

      {window.innerWidth < 769 && showInputBox && (
        <div className="input-box">
          <div className="input-add">
            <input
              ref={inputRef}
              type="text"
              value={label}
              onChange={handleLabelChange}
              placeholder="Enter label"
            />
            <button
              className="button"
              onClick={() => {
                if (label.trim() !== "") {
                  if (selectedNodeId) {
                    handleEdit();
                  } else {
                    addNode();
                  }
                } else {
                  addClick();
                }
              }}
            >
              {showButton}
            </button>
          </div>
          <div className="cancel-button">
            <button className="button" onClick={cancelClick}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* popup */}

      {showPopup && (
        <Popup handleClose={handlePopupClose} data={state.popupData} />
      )}
    </div>
  );
};
export default Mindnode;
