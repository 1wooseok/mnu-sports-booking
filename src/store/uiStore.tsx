import { ReactElement, ReactNode } from "react";
import { atom, selector, useRecoilState } from "recoil";

const currentPathState = atom<string>({
  key: "currentPathState",
  default: "/",
});

// const currentHeaderState = selector({
//   key: "currentHeaderState",
//   get: ({ get }) => {
//     const path = get(currentPathState);

//     const headerTable = {
//       "/": <MyHeader />,
//       "/"
//     }
//   }
// });

const currentHeaderState = atom<ReactNode | null>({
  key: "currentHeaderState",
  default: null,
});

export const useCurrentHeader = () => {
  const [CurrentHeader, setCurrentHeader] = useRecoilState<ReactNode | null>(
    currentHeaderState
  );
  console.log({ CurrentHeader });
  return [CurrentHeader, setCurrentHeader];
};

// const useViewHeader = () => {
//   const path = useRecoilValue(currentPath);
//   let viewHeader: React.ReactElement;
//   switch (path) {
//     case "/":

//     default:
//       return null;
//   }

//   return viewHeader;
// };
