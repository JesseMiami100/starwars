import React, {useContext} from 'react'
import { Context } from '../store/appContext.jsx'

export const SingleCharacter = () => {
    const {store, actions} = useContext(Context)
    console.log(store.singleCharacter)
    return(
        <>
            {store.singleCharacter.uid ?
        <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={store.baseImgUrl +'/characters/'+ store.singleCharacter.uid + '.jpg'} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{store.singleCharacter.properties.name}</h5>
              <p className="card-text">
                {store.singleCharacter.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    :
        <Link to='/'>
            <p>Click here to go back the first page</p>
        </Link>
        }
      </>
    );
};
