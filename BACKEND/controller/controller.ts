import { Request, Response } from "express";
import csv from "csvtojson";
import economicModel from "../model/economicModel";
import populationModel from "../model/populationModel";
import birthrateModel from "../model/birthrateModel";
import deathrateModel from "../model/deathrateModel";
import healthcarespendingrateModel from "../model/healthcarespendingrateModel";
import tariffrateModel from "../model/tariffrateModel";
import smokingrateModel from "../model/smokingrateModel";

export const createEconomic = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await economicModel.create({
      economic: file,
    });
    return res.status(201).json({
      message: "Economic data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Economic data isn't created successfully",
      status: 404,
    });
  }
};

export const readEconomic = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await economicModel.find();
    return res.status(200).json({
      message: "Economic data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Economic data isn't read successfully",
      status: 404,
    });
  }
};

export const createPopulation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await populationModel.create({
      population: file,
    });
    return res.status(201).json({
      message: "population data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "population data isn't created successfully",
      status: 404,
    });
  }
};

export const readPopulation = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await populationModel.find();
    return res.status(200).json({
      message: "population data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "population data isn't read successfully",
      status: 404,
    });
  }
};

export const createBirthrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await birthrateModel.create({
      birthrate: file,
    });
    return res.status(201).json({
      message: "birthrate data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "birthrate data isn't created successfully",
      status: 404,
    });
  }
};

export const readBirthrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await birthrateModel.find();
    return res.status(200).json({
      message: "birthrate data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "birthrate data isn't read successfully",
      status: 404,
    });
  }
};

export const createDeathrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await deathrateModel.create({
      deathrate: file,
    });
    return res.status(201).json({
      message: "deathrate data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "deathrate data isn't created successfully",
      status: 404,
    });
  }
};

export const readDeathrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await deathrateModel.find();
    return res.status(200).json({
      message: "deathrate data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "deathrate data isn't read successfully",
      status: 404,
    });
  }
};

export const createTariffrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await tariffrateModel.create({
      tariffrate: file,
    });
    return res.status(201).json({
      message: "tariff rate data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "tariff rate data isn't created successfully",
      status: 404,
    });
  }
};

export const readTariffrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await tariffrateModel.find();
    return res.status(200).json({
      message: "tariff rate data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "tariff rate data isn't read successfully",
      status: 404,
    });
  }
};

export const createHealthcarespendingrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await healthcarespendingrateModel.create({
      healthcarespendingrate: file,
    });
    return res.status(201).json({
      message: "healthcare spending rate data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "healthcare spending rate data isn't created successfully",
      status: 404,
    });
  }
};

export const readHealthcarespendingrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await healthcarespendingrateModel.find();
    return res.status(200).json({
      message: "healthcare spending rate data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "healthcare spending rate data isn't read successfully",
      status: 404,
    });
  }
};
export const createSmokingrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const file = await csv().fromFile(req.file.path);

    const data = await smokingrateModel.create({
      smokingrate: file,
    });
    return res.status(201).json({
      message: "smoking rate data created successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "smoking rate data isn't created successfully",
      status: 404,
    });
  }
};

export const readSmokingrate = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const data = await smokingrateModel.find();
    return res.status(200).json({
      message: "smoking rate data read successfully",
      data,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "smoking rate data isn't read successfully",
      status: 404,
    });
  }
};
