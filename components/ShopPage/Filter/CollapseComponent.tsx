import { Collapse, Checkbox, FormControlLabel } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { ReturnedCollections } from "@/lib/types/colletions";

interface ListItemWithHandler extends ReturnedCollections {
  handleCheckboxChange: (type: string, value: string, checked: boolean) => void;
}

interface CollapseComponentProps {
  state: boolean;
  list: ListItemWithHandler[];
}

const CollapseComponent: React.FC<CollapseComponentProps> = ({
  state,
  list,
}) => {
  const searchParams = useSearchParams();
  return (
    <div className='px-2'>
      <Collapse in={state} timeout='auto' unmountOnExit>
        <div className='flex flex-col gap-2 py-2'>
          {list.map((item, index) => (
            <p key={index} className='flex flex-col'>
              <FormControlLabel
                control={
                  <Checkbox
                    size='small'
                    checked={searchParams.getAll("filter").includes(item.id)}
                    onChange={(e) =>
                      item.handleCheckboxChange(
                        "filter",
                        item.id,
                        e.target.checked
                      )
                    }
                  />
                }
                label={item.name}
              />
            </p>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseComponent;
