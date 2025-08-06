import React, { useState } from 'react';
import './PumpPartsForm.css';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PumpPartsForm = () => {
  const [pumpMake, setPumpMake] = useState('');
  const [partNo, setPartNo] = useState('');
  const [moc, setMoc] = useState('');
  const [itemType, setItemType] = useState('');

  const [showPumpMake, setShowPumpMake] = useState(false);
  const [showPartNo, setShowPartNo] = useState(false);
  const [showMoc, setShowMoc] = useState(false);
  const navigate = useNavigate();
const [showItemType, setShowItemType] = useState(false);

  return (
    <div className="flow-chart">
      <div className="back-arrows" onClick={() => navigate("/")}>
        <FaArrowLeft />
        <span>Back</span>
      </div>

      <div className="flow-row">

        <div className="box" onClick={() => setShowPumpMake(!showPumpMake)}>
          Pump Make
          {showPumpMake && (
            <select
              className="dropdown"
              value={pumpMake}
              onChange={(e) => setPumpMake(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Make1">Make1</option>
              <option value="Make2">Make2</option>
            </select>
          )}
        </div>

        <div className="arrow">→</div>

        <div className="box">Pump Model</div>

        <div className="arrow">→</div>

       <div className="box" onClick={() => setShowItemType(!showItemType)}>
  Size
  {showItemType && (
    <select
      className="dropdown"
      value={itemType}
      onChange={(e) => setItemType(e.target.value)}
    >
      <option value="">Select</option>
      <option value="common">Common Item</option>
      <option value="unique">Unique Item</option>
    </select>
  )}
</div>

        <div className="arrow">→</div>

        <div className="box" onClick={() => setShowPartNo(!showPartNo)}>
          Part No
          {showPartNo && (
            <select
              className="dropdown"
              value={partNo}
              onChange={(e) => setPartNo(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Part1">Part1</option>
              <option value="Part2">Part2</option>
            </select>
          )}
        </div>

        <div className="arrow">→</div>

        <div className="box">Part Name</div>

        <div className="arrow">→</div>

        <div className="box" onClick={() => setShowMoc(!showMoc)}>
          MOC
          {showMoc && (
            <select
              className="dropdown"
              value={moc}
              onChange={(e) => setMoc(e.target.value)}
            >
              <option value="">Select</option>
              <option value="SS">SS</option>
              <option value="CI">CI</option>
            </select>
          )}
        </div>

        <div className="arrow">→</div>

        <div className="box">Unit Price</div>

        <div className="arrow">→</div>

        <div className="box">Available Qty</div>

        <div className="arrow">→</div>

        <div className="box">Drg.</div>

        <div className="arrow">→</div>

        <div className="box highlight">
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PumpPartsForm;
