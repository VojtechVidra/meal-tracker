import React from "react";
import { ingredients } from "./mocks/ingredients";
import { recipes } from "./mocks/recipes";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { Ingredient } from "./types";
import ContentEditable from "react-contenteditable";

const ingredientsMap = new Set(ingredients);

export const App = () => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {[
              "Name",
              "Calories",
              "Fat",
              "Protein",
              "Carbs",
              "Sugar",
              "Fiber",
              "Salt",
            ].map((name) => (
              <TableCell key={name}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient) => (
            <TableRow key={ingredient.id}>
              {[
                { key: "name", text: ingredient.name },
                ...(Object.keys(
                  ingredient.nutrition
                ) as (keyof Ingredient["nutrition"])[]).map((key) => ({
                  key: `nutrition.${key}`,
                  text: ingredient.nutrition[key],
                })),
              ].map((item) => (
                <TableCell
                  key={item.key}
                  // contentEditable
                  // onChange={(e) =>
                  //   console.log(ingredient.id, item.key, e.target)
                  // }
                  // dangerouslySetInnerHTML={{ __html: item.text.toString() }}
                >
                  {/* <ContentEditable
                    style={{ padding: 16 }}
                    onChange={(e) =>
                      console.log(ingredient.id, item.key, e.target)
                    }
                    html={item.text.toString()}
                  /> */}
                  {item.text}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
