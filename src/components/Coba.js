import React from "react";

class Coba extends React.Component {

	// Constructor
	constructor(karyawans) {
		super(karyawans);
        
		this.state = {
			karyawans: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
        "http://localhost:5000/karyawans")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					karyawans: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, karyawans } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				karyawans.map((karyawan) => (
				<ol key = { karyawan.id } >
					User_Name: { karyawan.nama_kar },
					Full_Name: { karyawan.tgl_lahir },
					User_Email: { karyawan.jabatan }
					</ol>
				))
			}
		</div>
	);
}
}


export default Coba;
