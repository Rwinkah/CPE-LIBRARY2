import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import RespContainer from "./resp_container";

export default function TabNote() {
  return (
    <div className="flex">
      <RespContainer hide={true} class_full="mt-5">
        <Label className="font-medium text-[#807E7E] text-xl pt-2 mr-14">
          Upload all your personal notes here
        </Label>
      </RespContainer>

      <Button className="border rounded-3xl mt-3 text-white bg-primary">
        Upload new note
      </Button>
      <Button className="border rounded-3xl ml-8 mt-3 text-white bg-primary">
        Type new note
      </Button>
    </div>
  );
}
