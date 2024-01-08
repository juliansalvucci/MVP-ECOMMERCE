import React, { useState } from "react";
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

const Select = styled.select`
  padding: 5px;
  border: none;
  border-radius: 3px;
`;

export const Toolbar = () => {
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleSubcategoriaChange = (event) => {
    setSubcategoria(event.target.value);
  };
  return (
    <ToolbarContainer>
      <SearchInput type="text" placeholder="Buscar" />
      <Select value={categoria} onChange={handleCategoriaChange}>
        <option value="">Seleccionar Categoría</option>
        <option value="EQUIPOS PORTATILES">EQUIPOS PORTATILES</option>
      </Select>
      <Select value={subcategoria} onChange={handleSubcategoriaChange}>
        <option value="">Seleccionar Subcategoría</option>
        <option value="NOTEBOOKS">NOTEBOOKS</option>
        <option value="CARGADORESNOTEBOOKS">CARGADORES DE NOTEBOOKS</option>
      </Select>
      <div>
        <FaUser style={{ marginRight: "10px" }} />
        Ingresar
        <FaShoppingCart style={{ marginLeft: "10px", marginRight: "10px" }} />
        Compras
      </div>
    </ToolbarContainer>
  );
};
