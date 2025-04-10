import express, { Request, Response, Router } from "express";
import { log } from "@devades/logger";

const router: Router = express.Router();

import { PrismaClient } from '../../../../prisma/app/generated/prisma/client'
const prisma = new PrismaClient()

router.get("/:userId", async (req: Request, res: Response) => {

  log('params all roles for userid', req.params);

  const {userId} = req.params;
  const userRoles = await prisma.role.findMany({
    where: {
      userId: Number(userId),
    },
  });

  log('userRoles by userId', userRoles);

  return res.json(userRoles); 
});

router.get("/:userId/role/:roleId", async (req: Request, res: Response) => {

  log('params role for role id', req.params);

  const {userId, roleId} = req.params;
  const userRole = await prisma.role.findFirst({
    where: {
      userId: Number(userId),
      id: Number(roleId),
    },
  })

  log('userRole by roleId', userRole);
  
  return res.json(userRole); 
});

router.put("/:userId/role/:roleId", async(req: Request, res: Response) => {
  const {roleId} = req.params;

  const updatedUserRole = await prisma.role.update({
    where: {
      id: Number(roleId),
    },
    data: {...req.body}
  })
  return res.json(updatedUserRole); 
});

router.post("/:userId", async(req: Request, res: Response) => {
  const newRole = await prisma.role.create({
    data: {...req.body}
  })
  return res.status(201).send(newRole); 
});

export default router;
