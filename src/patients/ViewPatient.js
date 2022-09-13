import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewPatient() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    address: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8080/patient/${id}`);
    setPatient(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Patient Details</h2>

          <div className="card">
            <div className="card-header">
              Details of patient id : {patient.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {patient.name}
                </li>
                <li className="list-group-item">
                  <b>Age:</b>
                  {patient.age}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>
                  {patient.address}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}