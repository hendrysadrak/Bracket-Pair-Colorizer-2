import { IGrammar } from "./IExtensionGrammar";

export default class LanguageConfig {
    public readonly grammar: IGrammar;
    public readonly regex: RegExp;
    public readonly bracketToId: Map<string, { open: boolean; key: number }>;

    constructor(grammar: IGrammar, regex: RegExp, bracketToId: Map<string, { open: boolean; key: number }>) {
        this.grammar = grammar;
        this.regex = regex;
        this.bracketToId = bracketToId;
    }
}
