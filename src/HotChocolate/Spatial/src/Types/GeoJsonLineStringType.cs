﻿using NetTopologySuite.Geometries;
using static HotChocolate.Types.Spatial.WellKnownFields;
using static HotChocolate.Types.Spatial.Properties.Resources;
using static HotChocolate.Types.Spatial.WellKnownTypeNames;

namespace HotChocolate.Types.Spatial
{
    public sealed class GeoJsonLineStringType
        : ObjectType<LineString>
        , IGeoJsonObjectType
    {
        protected override void Configure(IObjectTypeDescriptor<LineString> descriptor)
        {
            descriptor
                .Name(LineStringTypeName)
                .Implements<GeoJsonInterfaceType>()
                .BindFieldsExplicitly();

            descriptor
                .Field<GeoJsonResolvers>(x => x.GetLineStringCoordinates(default!))
                .Name(CoordinatesFieldName)
                .Description(GeoJson_Field_Coordinates_Description_LineString);

            descriptor
                .Field<GeoJsonResolvers>(x => x.GetType(default!))
                .Description(GeoJson_Field_Type_Description);

            descriptor
                .Field<GeoJsonResolvers>(x => x.GetBbox(default!))
                .Description(GeoJson_Field_Bbox_Description);

            descriptor
                .Field<GeoJsonResolvers>(x => x.GetCrs(default!))
                .Description(GeoJson_Field_Crs_Description);
        }
    }
}
