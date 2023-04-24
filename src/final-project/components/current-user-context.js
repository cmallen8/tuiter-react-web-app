import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { profileThunk} from "../users/users-thunk";

function CurrentUserContext({ children }) {
    const dispatch = useDispatch();
    const getProfile = async () => {
        await dispatch(profileThunk());
    };
    useEffect(() => {
        getProfile();
    }, []);

    return children;
}

export default CurrentUserContext;