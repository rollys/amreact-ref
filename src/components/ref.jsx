import React, { Component } from "react";

class Ref extends Component {
  constructor() {
      super()
      this.inputApellido = React.createRef()
  }

  handleClick = e => {
    // const { name, value } = this.inputNombre;
    // console.log("Nombre", name);
    // console.log("Valor", value);
    // const { name, value } = this.inputNombre;
    console.log("Nombre", this.inputNombre.name);
    console.log("Valor", this.inputNombre.value);
    
    // Con React.createRef()
    console.log("Nombre ape", this.inputApellido.current.name);
    console.log("Valor ape", this.inputApellido.current.value);
  };
  render() {
    return (
      <>
        <div>
          <label>Nombre:</label>
          <input
            ref={elementoInput => {
              this.inputNombre = elementoInput;
            }}
            type="text"
            name="nombre"
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input ref={this.inputApellido} type="text" name="apellidos" />
        </div>
        <div>
          <button onClick={this.handleClick}>Enviar</button>
        </div>
      </>
    );
  }
}

export default Ref;
