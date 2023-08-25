import React from "react";
import styled from "styled-components";

const highLightText = (title: string, search?:string) => {
    if(search == null) return title;
    if(search !== "" && title.toLowerCase().includes(search.toLowerCase())) {
        const part = title.split(search);
        return (
            <>
                {part[0]}
                <Mark>{search}</Mark>
            </>
        )
    }

    return title;
};

export default highLightText;

const Mark = styled.span`
    color:#ff001f;
`