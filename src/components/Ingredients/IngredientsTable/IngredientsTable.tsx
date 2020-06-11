import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@material-ui/core";
import ContentEditable from "react-contenteditable";
import { Ingredient } from "../../../types";
import { ingredients } from "/src/mocks/ingredients";

export const IngredientsTable = () => {
  return (
    <TableContainer component={Paper}>
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
              ].map((item, i) => (
                <TableCell
                  style={i !== 0 ? { width: 160 } : undefined}
                  key={item.key}
                  // contentEditable
                  // onChange={(e) =>
                  //   console.log(ingredient.id, item.key, e.target)
                  // }
                  // dangerouslySetInnerHTML={{ __html: item.text.toString() }}
                  padding="none"
                >
                  <ContentEditable
                    style={{ padding: 16 }}
                    onChange={(e) =>
                      console.log(ingredient.id, item.key, e.target)
                    }
                    html={item.text.toString()}
                  />
                  {/* {item.text} */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
