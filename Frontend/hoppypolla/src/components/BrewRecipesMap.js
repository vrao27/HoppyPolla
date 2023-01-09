
import {useState, useEffect} from 'react';
import {Link, Outlet} from 'react-router-dom';


function BrewRecipesMap({brewRecipe}) {
    // The brewRecipe variable is now defined and can be used in the component
    const [currentRecipe, setCurrentRecipe] = useState([]);
    useEffect(() => {
      setCurrentRecipe(currentRecipe => [...currentRecipe, {
        name: brewRecipe.title.name,
        category: brewRecipe.title.category,
        defaultQty: brewRecipe.title.defaultQty,
        description: brewRecipe.description,
        brewingWater: brewRecipe.brewingWater,
        mashGrains: brewRecipe.mashGrains,
        mashSchedule: brewRecipe.mashSchedule,
        boil: brewRecipe.boil,
        fermentation: brewRecipe.fermentation
      }])
    }, [])
    console.log(currentRecipe)
    return (
      <div className='brewrecipes-map'>
          <Link to={`/brew/${brewRecipe._id}`}><h1>{brewRecipe.title.name}</h1></Link>
          <p>Category: {brewRecipe.title.category}</p>
          <div>
            <Outlet context={[currentRecipe]}  />
          </div>
      </div>
    )
  }



  export default BrewRecipesMap;





// export function BrewRecipesMap({brewRecipe}) {
//     // The brewRecipe variable is now defined and can be used in the component
//     useEffect(() => {
//       setCurrentRecipe(currentRecipe => [...currentRecipe, {
//         name: brewRecipe.title.name,
//         category: brewRecipe.title.category,
//         defaultQty: brewRecipe.title.defaultQty,
//         description: brewRecipe.description,
//         brewingWater: brewRecipe.brewingWater,
//         mashGrains: brewRecipe.mashGrains,
//         mashSchedule: brewRecipe.mashSchedule,
//         boil: brewRecipe.boil,
//         fermentation: brewRecipe.fermentation
//       }])
//     }, [])

//     return (
//       <div className='brewrecipes-map'>
//           <Link to={`/brew/${brewRecipe._id}`}><h1>{brewRecipe.title.name}</h1></Link>
//           <p>Category: {brewRecipe.title.category}</p>
//           <div>
//             <Outlet />
//           </div>
//       </div>
//     )
//   }

// function BrewRecipesMap({ brewRecipe:{title: {name, category, defaultQty}, description, brewingWater, mashGrains, mashSchedule, boil, fermentation}, _id}) {

//     return (
//       <div className='brewrecipes-map'>
//           <Link to={`/brew/${_id}`}><h1>{brewRecipe.title.name}</h1></Link>
//           <p>Category: {brewRecipe.title.category}</p>
//           <div>
//             <Outlet context={{name, category, defaultQty},description, brewingWater, mashGrains, mashSchedule, boil, fermentation} />
//           </div>
//       </div>
//     )
//   }
