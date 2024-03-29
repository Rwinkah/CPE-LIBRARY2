import RespContainer from "./resp_container";

export default function Footer() {
  return (
    <RespContainer hide={true} class_sm="flex flex-shrink">
      <footer className="py-5 mt-5">
        <p className="text-foreground text-xs">
          Copyright © 2024 CPE E-Learning Uniben, All rights reserved.
        </p>
      </footer>
    </RespContainer>

  );
}
