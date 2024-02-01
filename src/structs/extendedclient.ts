import { Client, Partials,  IntentsBitField, BitFieldResolvable, GatewayIntentsString } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

export class ExtendedCliente extends Client {
    constructor() {
        super({
            // Intents são lista de coisas que o bot tem acesso
            // Dessa forma foi adicionado todas  as intents possíveis para o nosso bot funcionar corretamente
            intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.Message,
                Partials.Reaction,
                Partials.ThreadMember,
                Partials.User
            ]
        })
    }

    public start() {
        this.login(process.env.BOT_TOKEN);
    }
}