import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, "access") {
  constructor() {
    super({
      secretOrKey: "SECRET_ACCESS_KEY",
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false
    });
  }

  validate(payload) {
    return payload;
  }
}