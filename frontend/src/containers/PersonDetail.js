import React, {useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedPerson, removeSelectedPerson } from "../redux/actions/personActions";
import { useSelector } from "react-redux";

const PersonDetail = () => {
    const person = useSelector((state) => state.person);
    const { first_name, last_name, hobbies, document_type, document_number } = person;
    const { id } = useParams();
    const dispatch = useDispatch();
    const fetchPerson = async () => {
        const response = await axios
        .get(`http://127.0.0.1:8000/api/person/${id}/`)
        .catch((err) => {
            console.log("Error", err);
        });
        dispatch(selectedPerson(response.data));
    };

    useEffect(() => {
        if (id && id !== "") fetchPerson();
        return () => {
            dispatch(removeSelectedPerson());
        };
    }, [id]);

    return (
        <div className="ui grid container">
            {Object.keys(person).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <h1>{first_name} {last_name}</h1>
                                <div className="ui placeholder">
                                    <div className="image header">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="column rp">
                                <h1>{document_type} {document_number}</h1>
                                <div className="ui placeholder">
                                    <div className="image header">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <h1>{hobbies}</h1>
                                <div className="ui placeholder">
                                    <div className="image header">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
       );
}

export default PersonDetail;