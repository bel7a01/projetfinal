import { useState } from 'react';
import InfoStyle from './Info.module.css'
import { toast } from 'react-toastify';
const Info = () => {

    const [time, settime] = useState('');
    const [date, setdate] = useState('');
    const [location, setlocation] = useState('');
    function editInfo(e) {
        e.preventDefault()
        let newInfo = { location, date, time }
        fetch("http://localhost:3000/info", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.error(data.message)
                } else {
                    toast.success(" updated info check home page ");
                    settime("")
                    setdate("")
                    setlocation("")
                }
            })


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, location, time });
    };

    return (
        <div className={InfoStyle.container}>
            <div className={InfoStyle.inputcont}>
                <div className={InfoStyle.cont1}>
                    <label htmlFor=""> date </label>
                    <input id='date' value={date} onChange={(e) => {
                        setdate(e.target.value)
                    }} className={InfoStyle.input} type="date" /></div>
                <div className={InfoStyle.cont1}><label htmlFor="">time</label>
                    <input id='time' value={time} onChange={(e) => settime(e.target.value)} className={InfoStyle.input} type="time" /></div>
                <div className={InfoStyle.cont1}>
                    <label htmlFor="">location</label>
                    <input id='location' value={location} onChange={(e) => {
                        setlocation(e.target.value);
                    }
                    } className={InfoStyle.input} type="text" /></div>
            </div>
            <button className={InfoStyle.but} onClick={editInfo}>submit</button>
        </div>

    )
}


export default Info;