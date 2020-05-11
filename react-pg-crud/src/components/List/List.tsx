import React from "react";
import ListItem from "./ListItem";
import ListItemLoader from "./ListItemLoader";
import classes from "./List.module.css";
import itemclasses from "./ListItem.module.css";
import { IListProps } from "../../interfaces";

const List: React.FC<IListProps> = (props) => {
  return (
    <div className={classes.List}>
      {!props.isLoading && !props.error && props.data ? (
        <div>
        {props.data.map((item: any, index: number) => (
          <ListItem name={item.name} phone={item.phone} key={index} />
        ))}
        <ListItemLoader />
        </div>
        ) : (
        <div>Loading...</div>
      )}
      {!props.isLoading && props.data && props.data.length === 0 && (
        <div className={itemclasses.ListItem}>No contacts found :/</div>
      )}
    </div>
  );
};

export default List;
