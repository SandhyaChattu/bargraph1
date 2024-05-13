// Write your code here
import {Component} from 'react'
import vaccinationByAge from '../VaccinationByAge'

class CowinDashboard extends Component {
  state = {age: []}
  componentDidMount(){
    this.getList()
  }
  getList = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const data = await fetch(url)
    const requiredData = await data.json()
    console.log(requiredData)
    this.setState({age: requiredData.last_7_days_vaccination})
  }
 
  render() {
     const age=this.state
     return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
        />
        <h1>Co-win</h1>

        <vaccinationByAge age={age}/>
      </div>
    )
  }
}
export default CowinDashboard
