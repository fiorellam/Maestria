import { useState } from 'react';
export const MaestriaApp = () => {

    const path = "src/assets/img/activities/"
    const [morningActivities, setMorningActivities] = useState([
        {"id": 1232, "name_activity":"Tomar medicamento", "img_url":path+"tomarMedicamentoMañana.jpg"}, 
        {"id": 1122, "name_activity":"Lavar Dientes", "img_url":path+"lavarDientesMañana.jpg"}, 
    ]);
    const [afternoonActivities, setAfternoonActivities] = useState([
        {"id": 1212, "name_activity":"Tomar medicamento", "img_url":path+"tomarMedicamentoTarde.jpg"}, 
        {"id": 1122, "name_activity":"Lavar dientes", "img_url":path+"lavarDientesTarde.jpg"}, 
        {"id": 1312, "name_activity":"Lavar trastes", "img_url":path+"lavarTrastesComida.jpg"}, 
    ]);
    const [nightActivities, setNightActivities] = useState([
        {"id": 11122, "name_activity":"Lavar Dientes", "img_url":path+"lavarDientesNoche.jpg"}, 
        {"id": 12121, "name_activity":"Lavar trastes", "img_url":path+"lavarTrastesCena.jpg"}, 
        {"id": 13127, "name_activity":"Bañarse", "img_url":path+"bañarse.jpg"}, 
        {"id": 13127, "name_activity":"Tomar Medicament", "img_url":path+"tomarMedicamentoNoche.jpg"}, 
    ]);
    const onClick = (activity, array_name) =>{
        if(array_name == 'morning'){
            setMorningActivities(morningActivities.map(act => {
                if(activity.id === act.id){
                    return {...act, img_url:path+"done.jpg"}
                } else{
                    return act;
                }
            }))
        }
        if(array_name == 'afternoon'){
            setAfternoonActivities(afternoonActivities.map(act => {
                if(activity.id === act.id){
                    return {...act, img_url:path+"done.jpg"}
                } else{
                    return act;
                }
            }))
        }
        if(array_name == 'night'){
            setNightActivities(nightActivities.map(act => {
                if(activity.id === act.id){
                    return {...act, img_url:path+"done.jpg"}
                } else{
                    return act;
                }
            }))
        }
    }

    return (
        <>
            <h1>Actividades Diarias</h1>
            <div className='morningContainer'>
                <div className='box-title'>
                    <img className="cover-img-activity" src="src/assets/img/coverActivities/morning.jpg" alt="" />
                    <img className='arrow-right' src="src/assets/img/coverActivities/arrow-right2.jpg" alt="" />
                </div>
                <div className='morningActivitiesContainer'>
                    {morningActivities.map((activity, index) => (
                        <div className='box' key={index} onClick={() => onClick(activity, 'morning')} >
                            <img className="img-activity" src={activity.img_url} alt="" />
                            <p className='name-activity'>{activity.name_activity}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='afternoonContainer'>
                <div className='box-title'>
                    <img className="cover-img-activity" src="src/assets/img/coverActivities/afternoon.jpg" alt="" />
                    <img className='arrow-right' src="src/assets/img/coverActivities/arrow-right2.jpg" alt="" />
                </div>
                <div className='afternoonActivitiesContainer'>
                    {afternoonActivities.map((activity, index) => (
                        <div className='box' key={index} onClick={() => onClick(activity, 'afternoon')}>
                            <img className="img-activity" src={activity.img_url} alt="" />
                            <p className='name-activity'>{activity.name_activity}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='nightContainer'>
                <div className='box-title'>
                    <img className="cover-img-activity" src="src/assets/img/coverActivities/night.jpg" alt="" />
                    <img className='arrow-right' src="src/assets/img/coverActivities/arrow-right2.jpg" alt="" />
                </div>
                <div className='nightActivitiesContainer'>
                    {nightActivities.map((activity, index) => (
                        <div className='box' key={index} onClick={() => onClick(activity, 'night')}>
                            <img className="img-activity" src={activity.img_url} alt="" />
                            <p className='name-activity'>{activity.name_activity}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}