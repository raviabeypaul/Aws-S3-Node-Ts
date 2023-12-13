import Joi from "@hapi/joi";

export const RegisterationCreateSchema = Joi.object({
    stay : Joi.object().keys({
        arrivalDate : Joi.string().required(),
        departureDate : Joi.string().required()
    }),
    room : Joi.object().keys({
        roomSize : Joi.string().required(),
        roomQuantity : Joi.string().required()
    })
})