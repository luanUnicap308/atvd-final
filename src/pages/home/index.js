import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ContextApi } from "../../context/contextApi";
import { myHobbies } from "../../utils/listprops";

const Home = () => {

    return (
        <div>
            <Container>
                <h2>Luan Henrique</h2>
                <p>22 anos</p>
                <p>Sistemas para internet</p>
            </Container>

        </div>
    )
}

export default Home;