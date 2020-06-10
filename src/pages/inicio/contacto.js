import Dashboard from 'src/containers/Templates/Dashboard'

class Contacto extends React.Component {
  render() {
    const { changeMode } = this.props;
    return (
      <Dashboard changeMode={changeMode}>
        <div>Contac</div>
      </Dashboard>
    )
  }
}

export default Contacto;