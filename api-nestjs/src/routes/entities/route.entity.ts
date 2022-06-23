import { Prop, Schema, raw, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RouteDocument = Route & Document;

@Schema()
export class Route {
    @Prop()
    _id: string;

    @Prop()
    tittle: string;

    @Prop(
        raw({
            lat: {type: Number},
            lgn: {type: Number},
        })
    )
    startPosition: {lat: number; lgn: number};

    @Prop(
        raw({
            lat: {type: Number},
            lgn: {type: Number},
        })
    )
    endPosition: {lat: number; lgn: number};

}

export const RouteSchema = SchemaFactory.createForClass(Route);
