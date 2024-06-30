import RespContainer from "./resp_container";

export default function Footer() {
  return (
    <RespContainer hide={true} class_full="">
      <footer className="py-5 mt-5 pb-0 mb-0 ">
        <p className="text-foreground text-xs mb-0 pb-0">
          © 2024 CPE E-Learning Uniben. This software is licensed under the MIT License.
        </p>
      </footer>
    </RespContainer>

  );
}
