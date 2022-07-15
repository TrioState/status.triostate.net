import { useEffect, useState } from "react";

const useChildren = (component, components) => {
  const [children, setChildren] = useState();

  useEffect(() => {
    let parentName = component.title;
    setChildren(
      components.filter((v) => {
        let splitName = v.title.split('~');
        return v.labels.find((v2) => v2.name === 'subcomponent') && splitName.length > 0 && splitName === parentName;
      })
    );
  },  [component, components]);

  return children;
};

export default useChildren;