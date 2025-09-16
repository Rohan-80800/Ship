import express from "express";
import Ship from "../models/Ship.js";
import { authenticateToken } from "../middleware/auth.js";
import { shipValidationSchema } from "../validators/shipValidator.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ships = await Ship.find().select("name email createdAt updatedAt");
    res.status(200).json(ships);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/", authenticateToken, async (req, res) => {
  try {
    const { error, value } = shipValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({
          message: "Validation error",
          details: error.details[0].message
        });
    }
    
    const ship = new Ship(value);
    await ship.save();

    res.status(201).json(ship);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ship = await Ship.findById(req.params.id).select(
      "name email createdAt updatedAt"
    );
    if (!ship) {
      return res.status(404).json({ message: "Ship not found" });
    }
    res.status(200).json(ship);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const { error, value } = shipValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({
          message: "Validation error",
          details: error.details[0].message
        });
    }

    const ship = await Ship.findByIdAndUpdate(req.params.id, value, {
      new: true,
      runValidators: true
    }).select("name email createdAt updatedAt");

    if (!ship) {
      return res.status(404).json({ message: "Ship not found" });
    }

    res.status(200).json(ship);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const ship = await Ship.findByIdAndDelete(req.params.id);
    if (!ship) {
      return res.status(404).json({ message: "Ship not found" });
    }
    res.status(200).json({ message: "Ship deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
