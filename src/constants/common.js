import React, { useState } from "react";

export const EMPTY_STRING = "";

export const isFound = (obj, arr) => {
  let rs = arr.some((e) => {
    return JSON.stringify(e) === JSON.stringify(obj) ||
     e.id === obj.id 
  });

  return rs;
};
