import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [patients, setPatients] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8080/patients");
    setPatients(result.data);
  };

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/patients/${id}`);
    loadPatients();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewpatient/${patient.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editpatient/${patient.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePatient(patient.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}