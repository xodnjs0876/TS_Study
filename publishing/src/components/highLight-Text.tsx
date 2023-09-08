import React from "react";
import styled from "styled-components";

const highLightText = (title: string, search?: string) => {
  if (search == null) return title;
  if (search !== "" && title.toLowerCase().includes(search.toLowerCase())) {
    const texts = title.split(new RegExp(`(${search})`, "gi"));

    return (
      <>
        {texts.map((text, index) =>
          text.toLowerCase() === search.toLowerCase() ? (
            <Mark key={index}>{text}</Mark>
          ) : (
            text
          )
        )}
      </>
    );
  }
  return title;
};

export default highLightText;

const Mark = styled.span`
  color: #ff001f;
`;
