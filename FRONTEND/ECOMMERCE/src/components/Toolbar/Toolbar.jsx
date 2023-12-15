import React from "react";
import styled from "styled-components";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const ToolbarContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: none;
  border-radius: 3px;
`;

export const Toolbar = () => {
  return (
    <ToolbarContainer>
      <SearchInput type="text" placeholder="Buscar" />
      <div>
        <FaUser style={{ marginRight: "10px" }} />
        Ingresar
        <FaShoppingCart style={{ marginLeft: "10px", marginRight: "10px" }} />
        Compras
      </div>
    </ToolbarContainer>
  );
};
