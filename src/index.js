module.exports = {
    Attributes: {
        Base: require('./app/Attributes/BaseAttribute').BaseAttribute,
        BelongsTo: require('./app/Attributes/BelongsToAttribute').BelongsToAttribute,
        MorphTo: require('./app/Attributes/MorphToAttribute').MorphToAttribute,
        DateTime: require('./app/Attributes/DateTimeAttribute').DateTimeAttribute,
        CreatedAt: require('./app/Attributes/CreatedAtAttribute').CreatedAtAttribute,
        UpdatedAt: require('./app/Attributes/UpdatedAtAttribute').UpdatedAtAttribute,
        DeletedAt: require('./app/Attributes/DeletedAtAttribute').DeletedAtAttribute,
        Yaml: require('./app/Attributes/YamlAttribute').YamlAttribute,
        Enum: require('./app/Attributes/EnumAttribute').EnumAttribute,
        Number: require('./app/Attributes/NumberAttribute').NumberAttribute,
        Boolean: require('./app/Attributes/BooleanAttribute').BooleanAttribute,
        ClassName: require('./app/Attributes/ClassNameAttribute').ClassNameAttribute,
        Array: require('./app/Attributes/ArrayAttribute').ArrayAttribute,
        Object: require('./app/Attributes/ObjectAttribute').ObjectAttribute,
        Id: require('./app/Attributes/IdAttribute').IdAttribute,
        Uuid: require('./app/Attributes/UuidAttribute').UuidAttribute,
        Text: require('./app/Attributes/TextAttribute').TextAttribute,
        LongText: require('./app/Attributes/LongTextAttribute').LongTextAttribute,
        Image: require('./app/Attributes/ImageAttribute').ImageAttribute,
        Select: require('./app/Attributes/SelectAttribute').SelectAttribute,
        Switch: require('./app/Attributes/SwitchAttribute').SwitchAttribute,
        Url: require('./app/Attributes/UrlAttribute').UrlAttribute,
        File: require('./app/Attributes/FileAttribute').FileAttribute,
        Email: require('./app/Attributes/EmailAttribute').EmailAttribute,
        Password: require('./app/Attributes/PasswordAttribute').PasswordAttribute,
        Html: require('./app/Attributes/HtmlAttribute').HtmlAttribute,
    },
    Relations: {
        MorphToMany: require('./app/Relations/MorphToMany').MorphToMany,
        BelongsToMany: require('./app/Relations/BelongsToMany').BelongsToMany,
        Matrix: require('./app/Relations/Matrix').Matrix,
    },
    Interceptor: require('./app/Interceptor').Interceptor,
    ProviderLoader: require('./app/Providers/ProviderLoader').ProviderLoader,
    ServiceProvider: require('./app/Providers/ServiceProvider').ServiceProvider,
    QuartzServiceProvider: require('./app/Providers/QuartzServiceProvider').QuartzServiceProvider,
    Manager: require('./app/Managers/Manager').Manager,
    Helper: require('./app/Helper').Helper,
    ResourceApi: require('./app/Api/ResourceApi').ResourceApi,
    container: require('./app/Container').container,
    AttributePreMount: require('./mixins/AttributePreMount').AttributePreMount,
    HandleResource: require('./mixins/HandleResource').HandleResource,
    mixins: {
        utils: require('./mixins/utils').utils,
        Expandable: require('./mixins/Expandable').Expandable,
    },
    install: function (Vue, options) {

        Vue.component("QResourceCreate", require('./components/Resource/Create').default)
        Vue.component("QResourceEdit", require('./components/Resource/Edit').default)
        Vue.component("QResourceIndex", require('./components/Resource/Index').default)
        Vue.component("QResourceRemove", require('./components/Resource/Remove').default)
        Vue.component("QResourceShow", require('./components/Resource/Show').default)

        Vue.component("QPageIndex", require('./components/Page/Index').default)
        Vue.component("QPageShow", require('./components/Page/Show').default)

        Vue.component("QShowJson", require('./components/Show/Json').default)
        Vue.component("QShowText", require('./components/Show/Text').default)

        Vue.component("QFormJson", require('./components/Form/FormJson').default)
        Vue.component("QFormHtml", require('./components/Form/FormHtml').default)
        Vue.component("QFormYaml", require('./components/Form/Yaml').default)

        Vue.component("QMorphToMany", require('./components/Input/MorphToMany').default)
        Vue.component("QBelongsToMany", require('./components/Input/BelongsToMany').default)
        Vue.component("QBelongsTo", require('./components/Input/BelongsTo').default)
        Vue.component("QBelongsToOne", require('./components/Input/BelongsToOne').default)
        Vue.component("QHtml", require('./components/Input/Html').default)
        Vue.component("QYaml", require('./components/Input/Yaml').default)
        Vue.component("QDate", require('./components/Input/Date').default)
        Vue.component("QDatetime", require('./components/Input/DateTime').default)
        Vue.component("QJson", require('./components/Input/Json').default)
        Vue.component("QSecret", require('./components/Input/Secret').default)
        Vue.component("QSelect", require('./components/Input/Select').default)
        Vue.component("QMorphTo", require('./components/Input/MorphTo').default)
        Vue.component("QSwitch", require('./components/Input/Switch').default)
        Vue.component("QText", require('./components/Input/Text').default)
        Vue.component("QTextarea", require('./components/Input/Textarea').default)
        Vue.component("QMatrix", require('./components/Input/Matrix').default)
        Vue.component("QFile", require('./components/Input/File').default)
    }
};