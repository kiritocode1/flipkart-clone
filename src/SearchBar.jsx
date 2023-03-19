import { Input , Button } from "@nextui-org/react";

import { TfiSearch } from "react-icons/tfi"; 
const SearchBar = () => {
    return (

        <Input labelPlaceholder={ "Search For item" } size="xl" className={ "w-full " } color="warning" rounded bordered contentLeft={<TfiSearch />
    }
            contentClickable={ true }
        />
    )
}; 

export default SearchBar; 
