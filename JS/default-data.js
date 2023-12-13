import { useRecoverDefaultData } from "./recover.js";
import { useDefaultLostData } from "./lost.js";
import { useDefaultFoundData } from "./founded.js";
import { useDefaultUsersData } from "./users.js";

function useAllDefaultData()
{
  useDefaultFoundData();
  useDefaultLostData();
  useRecoverDefaultData();
  useDefaultUsersData();
}

// useAllDefaultData();